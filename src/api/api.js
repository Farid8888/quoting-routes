


export const fetchQuotesData =async()=>{
    // const fetchData =async()=>{
        const response = await fetch('https://quotes-fd6ed-default-rtdb.firebaseio.com/quotes.json')
        if(!response.ok){
            throw new Error('Fetch failed!')
        }
        const data = await response.json()
        const fetchedData =[]
        for(let key in data){
            fetchedData.push({...data[key],id:key})
        }
        return fetchedData
    // }
        // try{
        //     await fetchData()
        // }catch(error){
        //     return 'Fetch failed'
        // }

}

export const sendQuotesData =async(quotes)=>{
const response = await fetch('https://quotes-fd6ed-default-rtdb.firebaseio.com/quotes.json',{
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify({
        author:quotes.author,
        text:quotes.text
    })
})
const responseData = await response.json()
if(!response.ok){
    throw new Error('Sending failed')
}

}

const FIREBASE_DOMAIN = 'https://quotes-fd6ed-default-rtdb.firebaseio.com'
export const getFilteredQuotes = async (quoteId)=>{
    const response = await fetch(`${FIREBASE_DOMAIN}/quotes/${quoteId}.json`)
        if(!response.ok){
            throw new Error('Fetch failed!')
        }
        const data = await response.json()
        const fetchedData ={
            ...data,
            id:quoteId
        }
        
        return fetchedData
}


export const fetchCommentsData =async(quoteId)=>{
    // const fetchData =async()=>{
        const response = await fetch(`${FIREBASE_DOMAIN}/comments/${quoteId}.json`)
        if(!response.ok){
            throw new Error('Fetch failed!')
        }
        const data = await response.json()
        const fetchedData =[]
        for(let key in data){
            fetchedData.push({...data[key],id:key})
        }
        return fetchedData
    }

    export const sendCommentsData =async(cmt)=>{
      const response = await fetch(`${FIREBASE_DOMAIN}/comments/${cmt.quoteId}.json`,{
          method:'POST',
          headers:{'Content-Type':'application/json'},
          body:JSON.stringify({
                comments:cmt.comments,
          })
      })
      if(!response.ok){
          throw new Error('Sending failed')
      }
      }
