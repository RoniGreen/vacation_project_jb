import { Router } from "express";
import { UserModel } from "../4-models/UserModel";
import { login, register } from "../5-logic/auth-logic";

export const authRouter = Router();

authRouter.post('/auth/register', async (req, res, next)=>{
    try{
        const user:UserModel = req.body;
        const info: any = await register(user);
        if (info.codeError !== undefined) return res.status(info.codeError).send(info.message);
        res.json(info)
    }
    catch(err){
        res.status(500).send(err);
    }
})

authRouter.post("/auth/login", async (req, res, next) => {
    try {
        const credentials = req.body;
        const info:any = await login(credentials);
        console.log(info);
        
        // if (info.errorCode !== undefined) return res.status(info.errorCode).send(info.message);
        res.json(info)
    }
    catch (err) {
        res.status(500).send(err);
    }
})


// authRouter.post('/auth/register', async (req, res, next) => {

//     // extract all data that have been send from req
//     const newUser: UserModel = req.body;


//     //check if email the same, because if sow we would have conflict
//     const result = await getAllUsers()

//     const validateEmail = result.find((user) => user.email === newUser.email)
//     if (!validateEmail) {
//         newUser.password = hashPassword(newUser.password);

//         await addUser(newUser);

//         const token = generateToken(newUser);
//         res.status(202).send(token);
//     } else {
//         res.json('Email allready exists!')
//     }

// });


// authRouter.post('/auth/login', async (req, res, next) => {
//     const newUser: UserModel = req.body;
    
//     const user = (await getAllUsers()).find((user) => user.email === newUser.email && user.password === hashPassword(newUser.password));

//     if (!user) {
//         // next(new BadCredentialsError());
//         res.json('worng ditails')
//         return;
//     }

//     const token = generateToken(user);
//     res.status(200).send(token);

// }) 


// authRouter.get('/vacations', async  (req, res, next)=> {
//     const vacations: VacationModal[] = await getAllVacations();
//     res.send(vacations);
// })
