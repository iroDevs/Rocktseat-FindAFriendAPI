import app from "./app";
import EnvVariables from "./env/variables";


app.listen({port: EnvVariables.NODE_PORT}, (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Server listening at ${EnvVariables.NODE_PORT}`);
})