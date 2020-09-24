This project tries to reproduce missing side panels from LogRocket session recording.

to run it, you need a LogRocket project

```
ngrok http 3000
REACT_APP_LOG_ROCKET_APP_ID=<your/logrocket/id> yarn start
```

Problem:

LogRocket does not update the style if it is dependent on properties or state and updated later, see src/routes/index.tsx
