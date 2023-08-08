let address: any = {
    country: 'Korea',
    city: 'Seoul',
    address1: 'Gangnam-gu',
    address2: 'Sinsa-dong 12'
}
const {country, ...detail} = address
console.log(detail) //{ city: 'Seoul', address1: 'Gangnam-gu', address2: 'Sinsa-dong 12' }