const getChatHistoryFetch = async () => {
    const URI_API_CHAT_HISTORY = 'http://localhost:5173/data/chatHistoryData.json'

    const responseHttp = await fetch(URI_API_CHAT_HISTORY,
        {
            method : 'GET'
        }
    )
    const result = await responseHttp.json()
    return result
}

export default getChatHistoryFetch