export async function fetchParts() {
    return [
        { id: 1, name: 'Part 1', quantity: 10 },
        { id: 2, name: 'Part 2', quantity: 5 },
        // Add more parts as needed
    ];
}

export async function fetchProfile() {
    return {
        firstName: 'John',
        lastName: 'Doe'
    };
}

export async function saveProfile(profile) {
    // Simulate saving profile
    return profile;
}

export async function savePart(part) {
    // Simulate saving part
    return part;
}

export async function deletePart(id) {
    // Simulate deleting part
    return id;
}
