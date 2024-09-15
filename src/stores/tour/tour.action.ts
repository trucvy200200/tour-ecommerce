import { getToursService } from "@/services/tour"
import { State } from "./index"
import { BaseAction } from ".."

type Actions = BaseAction<State>

export const getTours = () => {
  return async (actions: Actions) => {
    try {
      const res = await getToursService()
      actions.setState({
        ...actions.getState(),
        list: res?.tours
      })
    } catch (error: any) {
      actions.setState({
        ...actions.getState(),
        list: []
      })
    }
  }
}
