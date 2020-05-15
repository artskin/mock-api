export interface IArticleData {
  id: number
  status: string
  title: string
  abstractContent: string
  fullContent: string
  sourceURL: string
  imageURL: string
  timestamp: string | number
  platforms: string[]
  disableComment: boolean
  importance: number
  author: string
  reviewer: string
  type: string
  pageviews: number
}

export interface IRoleData {
  key: string
  name: string
  description: string
  routes: any
}

export interface ITransactionData {
  orderId: string
  timestamp: string | number
  username: string
  price: number
  status: string
}

export interface IUserData {
  id: number
  username: string
  password: string
  name: string
  email: string
  phone: string
  avatar: string
  introduction: string
  roles: string[]
}

// export interface taskType {
//   extra_info:{
//     name: string
//     deviceName: string
//   }
//   "task_id": string,
  
//   orderId: string
//   timestamp: string | number
  
//   price: number
//   status: string
// }


export interface taskType {
  "task_id": string,
  "status": boolean,
  "timestamp":Date,
  "title": string,
  "deviceName": string
  "source": {
    "type": string,
    "parameter": {
      "rtsp": {
        "url":string
      },
      "onvif": {
        "host": string
      },
      "sensepass": {
        "device_sn": number
      }
    }
  }
}