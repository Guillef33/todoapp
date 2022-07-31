import  { configurateStore } from '@reduxjs/toolkit';

export interface AppStore {

}

export default configurateStore<AppStore>({
    reducer: {
        // user.userSlice.reducer;
    }
})

