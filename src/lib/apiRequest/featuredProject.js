export default async function featuredProject() {
    const URL = `${process.env.BASE_URL}/FeaturedProject`
    const req = await fetch(URL, {
        method: 'GET',
    });
    const projects = await req.json();
    return projects;
}