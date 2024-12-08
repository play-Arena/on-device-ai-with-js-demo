export function parseBold(response) {
    return response.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>');
}