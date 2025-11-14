<Users>
---
id (fk)
name: string
email: string
password: string
roles: [string]

level: string
position: string
department: string

isActive: boolean
isDelete: boolean
store_id: ref Store id (fk)
manager_id: ref User id (fk)

<Stores>
---
id (fk)
name: string
address: string

<SubmittedForm>
---
id
form_id
user_id

created_time
updated_time

