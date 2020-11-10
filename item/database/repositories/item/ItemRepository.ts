import Item from '../../../interfaces/Item';

interface ItemRepository {
    createItem: (item: Item) => Promise<Item>;
}

export default ItemRepository;
