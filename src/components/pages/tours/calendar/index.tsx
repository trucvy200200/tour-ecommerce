import dayjs from "dayjs"
import "dayjs/locale/zh-cn"
import dayLocaleData from "dayjs/plugin/localeData"
import { Calendar, theme, Badge } from "antd"
import styled from "styled-components"
import { useState } from "react"
import Image from 'next/image'

dayjs.extend(dayLocaleData)

const Wrapper = styled.div`
  position: relative;
  .ant-picker-calendar {
    padding: 0 40px;
    @media (max-width: 479.98px) {
      padding: 0 20px;
    }
  }
  .ant-picker-panel {
    border-radius: 8px;
    padding: 5px;
  }
  .time {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    h2 {
      margin: 0;
      font-weight: 700;
      font-size: 40px;
      line-height: 54px;
      letter-spacing: -2px;
      color: black;
    }
    p {
      font-size: 20px;
      font-weight: 500;
      line-height: 32px;
    }
  }
  .monthDisplay {
    background: #166699 !important;
    padding: 5px 15px !important;
    border-radius: 8px !important;
    border: 1px solid #166699 !important;
    color: white;
    font-weight: 500;
  }
  .monthActions {
    width: 100%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, 100%);
    .button {
      cursor: pointer;
      width: 30px;
      height: 30px;
      padding: 0;
      display: flex;
      align-items: center;
      justify-content: center;

      background-color: #166699;
      color: #fff;
      border-radius: 8px;
      border: none;
      outline: none;
      box-shadow: none;
      transition: 0.3s;
      &.disable {
        background-color: grey;
      }
      &-prev {
        img {
          transform: rotate(180deg);
        }
      }
      &-next {
      }
    }
    @media (max-width: 479.98px) {
      .button {
        width: 25px;
        height: 25px;
        &-prev {
          transform: translateX(-10px);
        }
        &-next {
          transform: translateX(10px);
        }
      }
    }
  }
`

const CalendarStyled = styled(Calendar)`
  .ant-picker-calendar-date-content {
    .ant-badge {
      .ant-badge-status-dot {
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
      }
      .ant-badge-status-text {
        color: black;
        margin: 0;
      }
    }
  }
  .ant-picker-calendar-date-value {
    display: none;
  }
  border-color: transparent !important;
  .ant-select-selection-item {
    color: white !important;
  }
  .ant-picker-panel {
    border-color: transparent !important;
  }
  .ant-picker-cell-today {
    .ant-picker-cell-inner::before {
      border-color: #166699 !important;
    }
  }
  .ant-picker-cell-inner {
    min-width: 30px !important;
    height: 30px !important;
    line-height: 30px !important;
  }
  .ant-picker-cell-selected {
    .ant-picker-cell-inner {
      background: #166699 !important;
    }
    .ant-picker-calendar-date-content {
      .ant-badge {
        .ant-badge-status-text {
          color: white;
        }
      }
    }
  }
  .ant-select-single {
    height: auto;
    &.ant-select-open {
      &.ant-select-selection-item {
        color: white !important;
      }
    }
  }
  .ant-select-arrow {
    color: white !important;
  }
`

const CalendarComponent = () => {
  const [date, setDate] = useState(dayjs())
  const [selectedDate, setSelectedDate] = useState<any>()
  const [localeData, setLocaleData] = useState(dayjs().localeData().months(dayjs().clone()))
  const { token } = theme.useToken()
  const data = [{ date: '2024-06-25', time: '10:00:00' }, { date: '2024-06-26', time: '11:00:00' }]

  const dateCellRender = (value: any) => {
    return <Badge status={"success"} text={value.date()} />
  }

  const cellRender = (current: any, info: any) => {
    if (info.type === "date" && data?.map((item: any) => item.date)?.includes(current.format("YYYY-MM-DD"))) return dateCellRender(current)
    return info.originNode
  }

  const wrapperStyle = {
    width: "100%",
    borderRadius: token.borderRadiusLG
  }

  return (
    <>
      <Wrapper style={wrapperStyle}>
        <div className="monthDisplay">{localeData}</div>
        <CalendarStyled
          fullscreen={false}
          cellRender={cellRender}
          disabledDate={(current) => {
            return current < dayjs().add(-1, "days")
          }}
          value={date as any}
          headerRender={({ value, onChange }) => {
            let current = value?.clone()
            let locale = value?.localeData()
            return (
              <div className="monthActions flex items-center justify-between">
                <div
                  className={`button button-prev ${current?.month() - dayjs().month() === 0 ? "disable" : null}`}
                  onClick={() => {
                    let prevMonths = dayjs()
                    if (current?.month() - dayjs().month() !== 0)
                      prevMonths = current?.clone()?.add(-1, "months")
                    setLocaleData(locale?.months(prevMonths))
                    onChange(prevMonths)
                  }}
                >
                  <Image src={"/icons/ic-chevron-right-white.svg"} width={18} height={18} priority alt={"icon"} />
                </div>
                <div
                  className={`button button-next ${current?.month() - dayjs().month() === 3 ? "disable" : null}`}
                  onClick={() => {
                    if (current?.month() - dayjs().month() !== 3) {
                      const nextMonths = current?.clone()?.add(1, "months")
                      setLocaleData(locale?.months(nextMonths))
                      onChange(current?.clone().add(1, "months"))
                    }
                  }}
                >
                  <Image src={"/icons/ic-chevron-right-white.svg"} width={18} height={18} priority alt={"icon"} />
                </div>
              </div>
            )
          }}
          onSelect={(newDate: any) => {
            setDate(newDate)
            if (newDate?.isSame(date)) return
            setSelectedDate(data?.length > 0 ? data?.find((item: any) => item.date === newDate?.format("YYYY-MM-DD")) : null)
          }}
        />
      </Wrapper>
    </>
  )
}

export default CalendarComponent