export async function load() {
    const res = await fetch("https://fdnd.directus.app/items/person/250?fields=*,role.role_id.name");
    const data = await res.json();

    return {person: data.data }
}