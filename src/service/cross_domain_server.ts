import axios from './httpHelper';

export async function test(): Promise<any> {
    try {
        const ret = await axios.get('test?sss=111');
        return ret;
    } catch(e) {
        Promise.reject(e);
    }
}
export async function test1(): Promise<any> {
    try {
        const ret = await axios.get('test1?sss=111');
        return ret;
    } catch(e) {
        Promise.reject(e);
    }
}
