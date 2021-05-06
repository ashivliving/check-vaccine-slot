const axios = require('axios');
let found = false;
let counter = 0;

const getArgs = () => {
    return process.argv.reduce((acc, ite) => {
        if(ite.indexOf('=') > -1) {
            const val = ite.split('=');
            acc[val[0]] = val[1];
        }
        return acc;
    }, {});
}

const runbuzzer = () => {
    console.log("\007");
}

const modifyData = (resData, type) => {
    const data = resData.centers;
    const finalData = {
        "type" : type == 1 ? "18 yr less" : "45 yr more",
        "district" : data[0].block_name,
        "district_name" : data[0].district_name,
        "state_name" : data[0].state_name,
        "availability" : data.reduce((acc, ite) => {
            const filteredSession = ite.sessions.filter(sess => (((type == 1) ? (sess.min_age_limit < 45) : (sess.min_age_limit >= 45)) && sess.available_capacity));
            if(filteredSession.length) {
                filteredSession.map(item => {
                    acc.push({
                        "name" : ite.name,
                        "date" : item.date,
                        "available_slots" : item.available_capacity
                    })
                })
            }
            return acc;
        },[])
    }
    let s = new Date().toLocaleString(undefined, {timeZone: 'Asia/Kolkata'});
    if(finalData.availability.length) {
        // found = true;
        console.log('FOUND - @ -', s)
        console.log(finalData);
        runbuzzer();
    } else {
        console.log('NOT FOUND - @ -', s)
        runbuzzer();
        if(counter > 100) {
            // found = true;
        }
        counter++;
    }
}

const fetchSlots = (pincode=110001, type=1) => {
    const date = new Date();
    const dateString = `${date.getDate().toString().padStart(2, '0')}-${(date.getMonth()+1).toString().padStart(2, '0')}-${date.getFullYear()}`;
    const queryString = `https://cdn-api.co-vin.in/api/v2/appointment/sessions/calendarByPin?pincode=${pincode}&date=${dateString}`;
    axios.get(queryString).then(function (response) {
        // handle success
        modifyData(response.data, type);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
}

const args = getArgs();

let interval = setInterval(() => {
    fetchSlots(args.pincode, args.type);
    if(found) {
        clearInterval(interval);
    }
}, 5000)