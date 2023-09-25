export default async function teamList() {
    const URL = `${process.env.BASE_URL}/TeamList`
    const req = await fetch(URL, {
        method: 'GET',
    });
    const teams = await req.json();
    return teams;
}