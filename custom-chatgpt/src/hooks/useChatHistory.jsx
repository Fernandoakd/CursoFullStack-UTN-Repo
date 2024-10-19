import { useEffect, useState } from "react"
import getChatHistoryFetch from "../fetching/chatFetching"

const useChatHistory = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [chatHistory, setChatHistory] = useState(null)

    const getChatHistory = async () => {
        const chatHistory = await getChatHistoryFetch()
        setIsLoading(false)
        setChatHistory(chatHistory)
    }

    useEffect(() => {
        setTimeout(() =>{
            getChatHistory()
        },3000)
    }, [])

    return {
        isLoading: isLoading,
        chatHistory: chatHistory
    }
}

export default useChatHistory