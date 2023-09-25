export default async function testimonialList() {
    const URL = `${process.env.BASE_URL}/TestimonialList`
    const req = await fetch(URL, {
        method: 'GET',
    });
    const testimonials = await req.json();
    return testimonials;
}