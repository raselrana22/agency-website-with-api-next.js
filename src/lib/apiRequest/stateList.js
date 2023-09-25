export default async function stateList() {
    const URL = `${process.env.BASE_URL}/StatList`;

    const req = await fetch(URL, {
        method: 'GET',
    });
    const states = await req.json();
    return states;
}