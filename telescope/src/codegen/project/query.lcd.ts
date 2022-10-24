import { LCDClient } from "@osmonauts/lcd";
import { QueryProjectDocRequest, QueryProjectDocResponseSDKType, QueryProjectAccountsRequest, QueryProjectAccountsResponseSDKType, QueryProjectTxRequest, QueryProjectTxResponseSDKType, QueryParamsRequest, QueryParamsResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;

  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.projectDoc = this.projectDoc.bind(this);
    this.projectAccounts = this.projectAccounts.bind(this);
    this.projectTx = this.projectTx.bind(this);
    this.params = this.params.bind(this);
  }
  /* ProjectDoc queries info of a specific project. */


  async projectDoc(params: QueryProjectDocRequest): Promise<QueryProjectDocResponseSDKType> {
    const endpoint = `ixo/project/${params.projectDid}`;
    return await this.req.get<QueryProjectDocResponseSDKType>(endpoint);
  }
  /* ProjectAccounts lists a specific project's accounts. */


  async projectAccounts(params: QueryProjectAccountsRequest): Promise<QueryProjectAccountsResponseSDKType> {
    const endpoint = `ixo/projectAccounts/${params.projectDid}`;
    return await this.req.get<QueryProjectAccountsResponseSDKType>(endpoint);
  }
  /* ProjectTx lists a specific project's transactions. */


  async projectTx(params: QueryProjectTxRequest): Promise<QueryProjectTxResponseSDKType> {
    const endpoint = `ixo/projectTxs/${params.projectDid}`;
    return await this.req.get<QueryProjectTxResponseSDKType>(endpoint);
  }
  /* Params queries the paramaters of x/project module. */


  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `ixo/projectParams`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }

}