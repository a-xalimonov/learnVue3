export type User = {
    id: number,
    name: string,
    username: string,
    email: string,
    adress: Adress,
    phone: string,
    website: string,
    company: Company
}

type Adress = {
    street: string,
    suite: string,
    city: string,
    zipcode: string
}

type Company = {
    name: string,
    catchPhrase: string,
    bs: string
}