import * as dotenv from 'dotenv';
dotenv.config();

export * as LegacyClient from './client';
export * from './utils/stargate_client'; //export createClient customized for ed key handling
export * from './telescope_ixo/src'; // export cosmos(namespace)for proto encoded types and queries
export * from './telescope_external/src'; // export impact(namespace)for proto encoded types and queries

import { cosmos } from './telescope_external/src';
import { impact } from './telescope_ixo/src';

export const createQueryClient = async (rpcEndpoint: string = 'https://devnet.ixo.earth/rpc/') => {
	const queryCosmos = await cosmos.ClientFactory.createRPCQueryClient({ rpcEndpoint });
	const queryImpact = await impact.ClientFactory.createRPCQueryClient({ rpcEndpoint });
	return { ...queryCosmos, ...queryImpact };
};
