import {AppRegistry} from "react-native";
import Root from "@/root.tsx";
import {name as appName} from "./app.json";

AppRegistry.registerComponent(appName, () => Root);
