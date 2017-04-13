<template>
    <div>
        <div class="be-label">
            <i class="small icon" :class="source.icon"></i>
            <div class="be-text-bold">
                {{ source.labelName }}
            </div>
        </div>
        <div v-if="isTextarea" class="be-input-container">
            <textarea class="input-textarea" 
                      :placeholder="source.holderName" 
                      wrap="physical"
                      :value="source.input"
                      @input="updateValue($event.target.value)"
                      >
            </textarea>
        </div>
        <div v-else class="be-input-container">
            <input class="be-input" :type="type" maxlength="100"
                ref="input" 
                :placeholder="source.holderName"  
                :value="source.input" 
                @input="updateValue($event.target.value)"
            />
        </div>
    </div>
</template>
<style lang="sass" scoped>
.input-textarea {
    border: solid 1px #e2e2e2 !important;
    width: 700px !important;
}
</style>

<script>
/* 
    The component is used as follows
    <be-input :source="source.email" v-model="user.email"></be-input>
    @params source 
        source: {
            icon, // icon class.    eg. be-icon-password
            labelName, // label Name
            holderName, // placeholder text
            input, // now is useless
            isTextarea // 
        }
    it should be used as child of <from> with semantic ui
*/

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
        },
        isTextarea: {
            type: Boolean,
            default: false,
            required: false
        },
        type: {
            type: String,
            default: 'text',
            required: false
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