import getValue from "get-value";
import setValue from "set-value";
declare const gs: {
    get: typeof getValue;
    set: typeof setValue;
};
export default gs;
