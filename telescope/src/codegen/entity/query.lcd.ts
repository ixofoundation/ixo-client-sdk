import { LCDClient } from "@osmonauts/lcd";
import { QueryEntityListRequest, QueryEntityListResponseSDKType, QueryEntityDocRequest, QueryEntityDocResponseSDKType, QueryEntityConfigRequest, QueryEntityConfigResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;

  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.entityList = this.entityList.bind(this);
    this.entityDoc = this.entityDoc.bind(this);
    this.entityConfig = this.entityConfig.bind(this);
  }
  /* EntityList */


  async entityList(params: QueryEntityListRequest): Promise<QueryEntityListResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.entityType !== "undefined") {
      options.params.entity_type = params.entityType;
    }

    if (typeof params?.entityStatus !== "undefined") {
      options.params.entity_status = params.entityStatus;
    }

    const endpoint = `ixo/entity`;
    return await this.req.get<QueryEntityListResponseSDKType>(endpoint, options);
  }
  /* EntityDoc */


  async entityDoc(params: QueryEntityDocRequest): Promise<QueryEntityDocResponseSDKType> {
    const endpoint = `ixo/entity/${params.entityDid}`;
    return await this.req.get<QueryEntityDocResponseSDKType>(endpoint);
  }
  /* EntityConfig */


  async entityConfig(_params: QueryEntityConfigRequest = {}): Promise<QueryEntityConfigResponseSDKType> {
    const endpoint = `ixo/entity/config`;
    return await this.req.get<QueryEntityConfigResponseSDKType>(endpoint);
  }

}