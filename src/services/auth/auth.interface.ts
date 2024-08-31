export interface IReqLogin {
  email: string
  password: string
}

export interface IReqRegister {
  fullName: string
  username: string
  phone: string
  email: string
  birthday?: string
  password: string
}

export interface IReqVerifyMail {
  email: string
  verificationCode?: string
  password?: string
}
