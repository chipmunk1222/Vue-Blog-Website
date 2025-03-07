import request from './request'

export async function getMessage(page,limit){
  return await request.get('/api/message',{
    params:{
      page,
      limit
    }
  })
}

export async function postMessage(message){
  return await request.post('/api/message',message)
}