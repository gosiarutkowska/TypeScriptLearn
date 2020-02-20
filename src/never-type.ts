// we have only two situations with type never:
// - throw error
// - never ending loop, without any return
const showError = (msg: string) => {
    throw new Error(msg);
};

const showErrors = () => {
    while(1==1) {
        console.log('error');
    }
};

// even if function is type of void, returns 'undifined' not never
const showLog = () => {
    console.log('text');
};
