import React from 'react'
import './ChatHistory.css'
import { ThreeDotsIcon } from '../../Icons'

const verifyDates = (date) => {
    let paramDate = new Date(date)
    let actualDate = new Date()
    let diff = actualDate.getTime() - paramDate.getTime()
    return Math.round(diff / (1000 * 60 * 60 * 24))
}

const formatHistoryGroup = (listData) => {
    const formatDataList = []
    if (listData && Array.isArray(listData) && listData.length > 0) {
        const todayList = listData.filter((data) => verifyDates(data.timestamp) === 0)
        if (todayList.length > 0) {
            const jsonToday = {
                'group' : 'Hoy',
                'value' : todayList
            }
            formatDataList.push(jsonToday)
        }
        const yesterdayList = listData.filter((data) => verifyDates(data.timestamp) === 1)
        if (yesterdayList.length > 0) {
            const jsonYest = {
                'group' : 'Ayer',
                'value' : yesterdayList
            }
            formatDataList.push(jsonYest)
        }
        const lastWeekList = listData.filter((data) => verifyDates(data.timestamp) > 1 && verifyDates(data.timestamp) <= 7)
        if (lastWeekList.length > 0) {
            const jsonLW = {
                'group' : '7 días anteriores',
                'value' : lastWeekList
            }
            formatDataList.push(jsonLW)
        }
        const lastMonthList = listData.filter((data) => verifyDates(data.timestamp) > 7 && verifyDates(data.timestamp) <= 30)
        if (lastMonthList.length > 0) {
            const jsonLM = {
                'group' : '30 días anteriores',
                'value' : lastMonthList
            }
            formatDataList.push(jsonLM)
        }
        return formatDataList
    }
}

const orderListDesc = (listData) => {
    const orderedList = listData.slice().sort((a,b) => b.timestamp - a.timestamp)
    return orderedList
}

const ConversationsIterator = (props) => {
    const conversationList = props.conversations.map((conversation) => {
        return (
        <a className='chat-link' href="#" key={conversation.id}>
            <div className='conversation-container'>
                <span>{conversation.titulo}</span>
                <a className='dots-action' href="#">
                    <span><ThreeDotsIcon/></span>
                </a>
            </div>
        </a>
        )
    })
    return (
        <div className='chat-history-conversation-container'>
            {conversationList}
        </div>
    )
}

const ValueIterator = (props) => {
    const conversationsJSX = props.values.map(data => {
        return (
            <div key={data.id}>
                <ConversationsIterator conversations={data.conversations}/>
            </div>
        )
    })
    return (
        <>
            {conversationsJSX}
        </>
    )
}

const ConversationsGroupByDate = (props) => {
    
    return props.historyData.map(data => {
        return (
        <div>
            <h3 className='chat-history-group-date'>{data.group}</h3>            
            <ValueIterator values={data.value}/>
        </div>
        )
    });
}

const ChatHistory = (props) => {
  const propsGrouped = formatHistoryGroup(props.historyData) 
  
  return (
    <div className='chat-history-container'>
        <ConversationsGroupByDate historyData={propsGrouped} />
    </div>
  )
}

export default ChatHistory