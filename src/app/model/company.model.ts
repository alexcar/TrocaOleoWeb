export class Company {
  constructor(
    public id: string,
    public name: string,
    public commercialName: string,
    public cnpj: string,
    public contact: string,
    public ddd: string,
    public phone: string,
    public website: string,
    public email: string,
    public address: string,
    public neighborihood: string,
    public county: string,
    public country: string,
    public uf: string,
    public zipcode: string,
    public active: boolean
  )
  {}
}
