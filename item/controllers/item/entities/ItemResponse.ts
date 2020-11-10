import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';

class ItemResponse {
    @ApiModelProperty({
        example: 10,
    })
    id?: number;

    @ApiModelProperty({
        example: 'description',
    })
    description: string;

    @ApiModelProperty({
        example: 'code',
    })
    code: string;
}

export default ItemResponse;
