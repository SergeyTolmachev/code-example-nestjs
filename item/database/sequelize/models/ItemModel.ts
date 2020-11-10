import {
    DataType,
    Model,
    Column,
    Table,
    PrimaryKey,
    Unique,
    AutoIncrement,
} from 'sequelize-typescript';
import Item from '../../../interfaces/Item';

@Table({
    modelName: 'Item',
    tableName: 'items',
    timestamps: true,
    paranoid: true,
})
class ItemModel extends Model<ItemModel> implements Item {
    @AutoIncrement
    @Unique
    @PrimaryKey
    @Column
    id: number;

    @Column(DataType.TEXT)
    description: string;

    @Column(DataType.STRING(50))
    code: string;
}

export default ItemModel;
