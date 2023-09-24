export default async function brandList() {
    const URL = `${process.env.BASE_URL}/BrandList`
    const req = await fetch(URL, {
        method: 'GET',
    });
    const brands = await req.json();
    return brands;
}