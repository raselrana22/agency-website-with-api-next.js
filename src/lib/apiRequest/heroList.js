export default async function heroList() {
    const URL = `${process.env.BASE_URL}/HeroList`
    const req = await fetch(URL, {
        method: 'GET',
    });
    const heros = await req.json();
    return heros;
}