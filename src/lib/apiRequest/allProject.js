export default async function allProject() {
    const URL = `${process.env.BASE_URL}/AllProject`
    const req = await fetch(URL, {
        method: 'GET',
    });
    const projects = await req.json();
    return projects;
}