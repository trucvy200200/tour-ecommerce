export interface IReqLogin {
  email: string
  password: string
}

export interface IReqRegister {
  fullName: string
  address: string
  email: string
  password: string
}

export interface IReqVerifyMail {
  email: string
  verificationCode?: string
  password?: string
}

export interface IReqLogout {
  id: string
}