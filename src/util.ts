import { Tour } from "./types"

function displayName(tour: Tour): string {
    return tour.name + "-" + tour.type
}

export { displayName }