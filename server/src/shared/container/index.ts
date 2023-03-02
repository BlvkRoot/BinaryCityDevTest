import { ClientRepository } from '@domain/repositories/ClientRepository/ClientRepository';
import { IClientRepository } from '@domain/repositories/ClientRepository/IClientRepository';
import { ContactRepository } from '@domain/repositories/ContactRepository/ContactRepository';
import { IContactRepository } from '@domain/repositories/ContactRepository/IContactRepository';
import { container } from 'tsyringe';

container.registerSingleton<IClientRepository>('ClientRepository', ClientRepository);
container.registerSingleton<IContactRepository>('ContactRepository', ContactRepository);