import { createStore } from 'vuex'
import main from "@/store/modules/main";
import users from "@/store/modules/users";
import rooms from "@/store/modules/rooms";

// Create a new store instance.
const store = createStore({
  modules: {
    main,
    users,
    rooms,
  },
})

export default store
