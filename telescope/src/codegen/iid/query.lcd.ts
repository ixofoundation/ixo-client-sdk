import { LCDClient } from "@osmonauts/lcd";
import { QueryIidDocumentsRequest, QueryIidDocumentsResponseSDKType, QueryIidDocumentRequest, QueryIidDocumentResponseSDKType, QueryIidMetaDataRequest, QueryIidMetaDataResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;

  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.iidDocuments = this.iidDocuments.bind(this);
    this.iidDocument = this.iidDocument.bind(this);
    this.metaData = this.metaData.bind(this);
  }
  /* IidDocuments queries all iid documents that match the given status. */


  async iidDocuments(params: QueryIidDocumentsRequest): Promise<QueryIidDocumentsResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.status !== "undefined") {
      options.params.status = params.status;
    }

    const endpoint = `ixo/did/dids`;
    return await this.req.get<QueryIidDocumentsResponseSDKType>(endpoint, options);
  }
  /* IidDocument queries a iid documents with an id. */


  async iidDocument(params: QueryIidDocumentRequest): Promise<QueryIidDocumentResponseSDKType> {
    const endpoint = `ixo/did/dids/${params.id}`;
    return await this.req.get<QueryIidDocumentResponseSDKType>(endpoint);
  }
  /* MetaData queries a iid documents with an id. */


  async metaData(params: QueryIidMetaDataRequest): Promise<QueryIidMetaDataResponseSDKType> {
    const endpoint = `ixo/did/dids/${params.id}`;
    return await this.req.get<QueryIidMetaDataResponseSDKType>(endpoint);
  }

}