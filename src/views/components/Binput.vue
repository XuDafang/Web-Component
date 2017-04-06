<template>
    <div>
        <div class="be-label">
            <i class="small icon" :class="source.icon"></i>
            <div class="be-text-bold">
                {{ source.labelName }}
            </div>
        </div>
        <div class="be-input-container">
            <input class="be-input" type="text" maxlength="100"
                ref="input" 
                :placeholder="source.holderName"  
                :value="source.input" 
                @input="updateValue($event.target.value)"
            />
        </div>
    </div>
</template>



<script>
module.exports = {
    props: {
        source: { 
            icon: {
                type: String,
                default: 'be-icon-password'
            },
            labelName: {
                type: String,
                default: 'default-label',
                required: true
            },
            holderName: {
                type: String,
                default: 'default-placeholder',
            },
            input: {
                type: String,
                default: 'default-input',
                required: true
            }
        }
    },
    methods: {
        updateValue: function(value){
            let result = value;
            this.$emit('input', result);
        }
    }
}
</script>