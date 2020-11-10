import { IsString } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';

class CreateItemRequest {
    @ApiModelProperty({
        example: 'description',
    })
    @IsString()
    description: string;

    @ApiModelProperty({
        example: 'code',
    })
    @IsString()
    code: string;
}

export default CreateItemRequest;
