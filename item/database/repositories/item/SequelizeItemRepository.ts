import ItemRepository from './ItemRepository';
import ItemModel from '../../sequelize/models/ItemModel';
import Item from '../../../interfaces/Item';

export default class SequelizeItemRepository implements ItemRepository {
    constructor(@InjectModel(ItemModel) private itemModel: Model<ItemModel>) {}

    async createItem(item: Item): Promise<Item> {
        return this.itemModel.create(item);
    }
}
