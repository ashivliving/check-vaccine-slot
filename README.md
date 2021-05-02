# Check Vaccine Slots

Check available COWIN vaccination slots by Pincode,

## Installation

Install the dependencies run the server.

```sh
cd check-vaccine-slot
npm i
npm run start pincode=110086
npm run start pincode=110086 part=2
```

## Response

```sh
{ type: '18 yr less',
  district: 'Not Applicable',
  district_name: 'North West Delhi',
  state_name: 'Delhi',
  availability:
   [ { name: 'SARVODAY VIDYALAY POOTHKALAN 3',
       date: '03-05-2021',
       available_slots: 1 },
     { name: 'SARVODAY VIDYALAY POOTHKALAN 3',
       date: '04-05-2021',
       available_slots: 2 },
     { name: 'SARVODAY VIDYALAY POOTHKALAN 3',
       date: '05-05-2021',
       available_slots: 36 },
     { name: 'SARVODAY VIDYALAY POOTHKALAN 5',
       date: '03-05-2021',
       available_slots: 72 },
     { name: 'SARVODAY VIDYALAY POOTHKALAN 5',
       date: '04-05-2021',
       available_slots: 148 },
     { name: 'SARVODAY VIDYALAY POOTHKALAN 5',
       date: '05-05-2021',
       available_slots: 131 },
     { name: 'SARVODAY VIDYALAY POOTHKALAN 1',
       date: '04-05-2021',
       available_slots: 3 },
     { name: 'SARVODAY VIDYALAY POOTHKALAN 4',
       date: '04-05-2021',
       available_slots: 114 },
     { name: 'SARVODAY VIDYALAY POOTHKALAN 4',
       date: '05-05-2021',
       available_slots: 137 } ] }
```
