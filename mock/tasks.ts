import faker from 'faker'
import { Response, Request } from 'express'
import { taskType } from '../src/api/types'

export enum sourceType{
  'UNKNOWN',
  'VN_RTSP',
  'VN_ONVIF',
  'FC_SENSEPASS'
}

const tasksList: taskType[] = []
const tasksCount = 100

for (let i = 0; i < tasksCount; i++) {
  tasksList.push({
    "task_id": faker.random.uuid(),
    "timestamp":faker.date.recent(),
    "status": faker.random.boolean(),
    "title": faker.name.findName(),
    "deviceName": faker.name.findName(),
    "source": {
      "type": sourceType[faker.random.number({min:1,max:4})],
      "parameter": {
        "rtsp": {
          "url":faker.internet.url()
        },
        "onvif": {
          "host": faker.internet.ip()
        },
        "sensepass": {
          "device_sn": faker.random.number()
        }
      }
    }
    
  })
}

export const getTasks = (req: Request, res: Response) => {
  return res.json({
    code: 20000,
    msg:'',
    page_response:{
      offset:0,
      limit:faker.random.number({min:1,max:100}),
      total:tasksCount
    },
    dataList: tasksList
  })
}


// let Mock = require('mockjs');

// let dataTemplate = {
//   'key|1-10':'☆'
// }

// //Mock.mock('/api/art', 'get', data)
// console.log(JSON.stringify(Mock.toJSONSchema(dataTemplate)))
