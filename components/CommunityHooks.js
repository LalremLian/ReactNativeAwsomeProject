import { useDeviceOrientation } from "@react-native-community/hooks";

const orientation = useDeviceOrientation();

console.log("is orientation portrait: ", orientation.portrait);
console.log("is orientation landscape: ", orientation.landscape);
