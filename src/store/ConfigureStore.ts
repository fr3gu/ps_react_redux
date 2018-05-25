import RoombaProd from "./ConfigureStore.prod";
import RoombaDev from "./ConfigureStore.dev";

export default process.env.NODE_ENV === "production" ? RoombaProd : RoombaDev;