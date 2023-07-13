declare namespace IService {
    enum resultCodeEnum {
    }
    // 分页相关
    interface IPage {
      totalNum: number;
      totalSize: number;
      pageSize: number;
      pageNum: number;
    }
    // 请求结果及信息相关
    interface IResult {
      success: boolean;
      resultCode: resultCodeEnum;
      resultMsg: string;
      subResultMsg?: string;
    }
    type Response =  {
      data: unknown;
    } & IPage & IResult;
}