import { ClientRepository } from '@domain/repositories/ClientRepository/ClientRepository';
import { IClientRepository } from '@domain/repositories/ClientRepository/IClientRepository';
import { container } from 'tsyringe';

container.registerSingleton<IClientRepository>('ClientRepository', ClientRepository);